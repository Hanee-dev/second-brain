---
part: 프레임워크
level: 매뉴얼
tags:
  - 학습
  - Python
  - Django
  - Setting
  - mac
related_note: "[[Django 초기설정]]"
---
> [!summary]
> Python Django 의 초기설정 및 실행방법을 알아본다


### 목차
1. Python 설치
2. IDE 셋팅
3. 가상환경 Setting
4. Django Setting


### Python 설치
> 링크 : [Python 공식 홈페이지](https://www.python.org/)
> 	Download > 버전 선택 후 다운로드
> 	![800x500](https://onedrive.live.com/embed?resid=130CBFA7E5A0B893%2165070&authkey=%21AMzJlxa71Dqb_7M&width=1728&height=1016)
> 	
> 	   **너무 최신버전은 안정화가 안되어있을 수 있기에 확인 후 요구에 맞게 다운로드
> 	   brew로 Python을 다운할 수 있으나 트러블슈팅의 어려움으로 사이트에서 다운로드 하는 것을 추천**


### IDE 셋팅
> 1. VSCode 설치
> 2. Extensions 설치
>	죄측 Extensions버튼 클릭(네모 모양) > Python 검색 후 Python, Python Extension Pack 2가지 다운로드
>	![800x500](https://onedrive.live.com/embed?resid=130CBFA7E5A0B893%2165073&authkey=%21ABbph5jGSt1f9ro&width=3456&height=2158)


### 가상환경 Setting
> 1. VSCode에서 workspace 추가
> 2. root path에서 가상환경 설치 및 실행 
~~~
$ python -m venv [가상환경이름]
$ source ./[가상환경이름]/bin/activate
~~~
> 3. Django 설치
~~~
$ pip install django
~~~ 


### Django Setting
> 1. Django 프로젝트 생성
~~~
$ django-admin startproject [프로젝트이름]
~~~
> 2. Django 서버 실행
~~~
$ python ./[프로젝트이름]/manage.py runserver
~~~
> 정상적으로 실행됐을 경우 접근할 수 있는 URL이 console창에 표기되며, 해당 URL에 접근 시 아래 사이트를 확인할 수 있다
> 	![800x500](https://onedrive.live.com/embed?resid=130CBFA7E5A0B893%2165071&authkey=%21AJ4ZRguhgBgfD-I&width=1728&height=1016)