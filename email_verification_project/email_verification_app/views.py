import uuid
from django.conf import settings
from django.core.mail import send_mail, EmailMultiAlternatives
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.models import User
from django.contrib import messages

from email_verification_app.models import Profile

# Create your views here.
class BaseView(View):
    def get(self, request):
        return render(request,
                      'base.html',
                      )

class HomeView(View):
    def get(self, request):
        return render(request,
                      'home.html',
                      )

class LoginView(View):
    def get(self, request):
        return render(request,
                      'login.html',
                      )

    def post(self, request):
        user_mail = request.POST.get("email")
        user_password = request.POST.get("password")


        profile_obj = Profile.objects.filter(user__email=user_mail).first()

        if profile_obj.is_verified:
            return HttpResponse(f"User is verified - you can login {profile_obj}")

        else:
            return HttpResponse("User not verified - check your mail box")



class RegisterView(View):
    def get(self, request):
        return render(request,
                      'register.html',
                      )

    def post(self, request):
        username = request.POST.get("user_name")
        user_surname = request.POST.get("user_suername")
        user_mail = request.POST.get("email")
        user_password = request.POST.get("password")
        # try:
        if User.objects.filter(email=user_mail).first():
            messages.success(request, "Account already exist, try to login")
            return redirect('/register')

        usr_obj = User(username=f'{username}_{user_surname}', email=user_mail)
        usr_obj.set_password(user_password)
        usr_obj.save()

        auth_token = str(uuid.uuid4())
        profile_obj = Profile.objects.create(user=usr_obj, auth_token=auth_token)
        profile_obj.save()

        authenyication_token_mail(user_mail, auth_token)

        return redirect('/token')

        # except Exception as e:
        #     print(e)

class VerifyView(View):

    def get(self, request, auth_token):

        profile_obj = Profile.objects.filter(auth_token=auth_token).first()
        if profile_obj:
            profile_obj.is_verified = True
            profile_obj.save()
            messages.success(request, "You have verified account")
            return redirect("/home")
        else:
            return HttpResponse("error")


class TokenSentView(View):
    def get(self, request):
        return render(request,
                      'token_sent.html',
                      )


class SuccesView(View):
    def get(self, request):
        return render(request,
                      'success.html',
                      )

def authenyication_token_mail(email, token):
    subject = "Verify your account"
    text_content = "This is an important message."
    email_from = settings.EMAIL_HOST_USER
    html_content = f"<div> Clicke <a href='http://127.0.0.1:8000/verify/{token}'> here</a> to verify</div>"
    msg = EmailMultiAlternatives(subject, text_content, email_from, [email])
    msg.attach_alternative(html_content, "text/html")
    msg.send()

