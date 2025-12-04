---
part: 프레임워크
level: 매뉴얼
tags:
  - Study
  - Python
  - Django
---
> [!summary]
> Django 설정 시 자주 사용하는 명령어 및 설정 값 모음


## 목차
1. SECRET_KEY 숨기기
2. APP 추가
3. 기본언어 및 시간 설정

<br>

## SECRET_KEY 숨기기
>[!tip]
>Django의 설정파일인 settings.py에 존재하는 "SECRET_KEY"는 Django에서 **키가 존재하지 않는 암호화 서명**에 사용된다. [Django 공식문서](https://docs.djangoproject.com/en/1.11/ref/settings/#std:setting-SECRET_KEY) 에서도 이러한 이유 때문에  SECRET_KEY는 숨길것을 권장하고 있다.<br>
>여러가지 방법으로 설정할 수 있지만 본 글에서는 env파일을 작성하여 분리하는 방법을 소개한다.

 1. 라이브러리 설치
~~~
$ pip install django-environ
~~~
 2. settings.py 수정
~~~
...
import environ
import os

# 환경 변수를 다루기 위한 env 객체를 생성
env = environ.Env(
	DEBUG=(bool, False)
)

# BASE_DIR/.env 파일에서 환경변수 Read
environ.Env.read_env(
	env_file=os.path.join(BASE_DIR, '.env')
)

SECRET_KEY = env('SECRET_KEY')
~~~
 3. .env 파일 작성 ( path = BASE_DIR/.env )
~~~
SECRET_KEY=[settings.py에서 복사한 SECRET_KEY]
~~~
4. 외부 저장소 commit 제외

<br>

## APP 추가
 1. APP 추가
~~~
python manage.py startapp [APP이름]
~~~
 2. 프로젝트의 settings.py 수정하여 APP을 사용할 수 있도록 설정 추가
~~~
...
INSTALLED_APPS = [
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',

	'APP이름',
]
~~~


## 기본언어 및 시간 설정
 1. settings.py 수정
~~~
...
LANGUAGE_CODE = 'ko-kr'
TIME_ZONE = 'Asia/Seoul'
~~~