---
part: 프레임워크
level: 매뉴얼
tags:
  - Setting
  - mac
---
> [!summary]
> Python은 보통 pip를 통해 필요한 패키지를 다운로드 받는다.<br>
> 필요한 패키지를 각각 다운로드 받는 것이 아니라 일괄로 원하는 Version을 받을 수 있는 pip 명령어를 알아보도록 한다


## 목차
1. pip
2. requirements.txt

<br>

## pip
> **P**ip **I**nstalls **P**ackages 의 약자
> Python 패키지를 설치하고 관리하는 Package Manager
> Mac의 brew, node의 npm, Linux의 apt와 같은 개념

<br>

### pip install
- pip 를 통해 패키지를 다운로드 받을 때 사용한다. 예를들어 Django 패키지를 다운받는 경우 명령어는 아래와 같다
~~~
$ pip install django
~~~

<br>

### pip freeze
- 현재 환경에 설치된 Python 패키지를 출력한다. 출력 결과는 "패키지명\==버전" 이다
~~~
$ pip freeze
Django==5.0.1
~~~

<br>

## requirements.txt
> [!tip]
> Python 프로젝트를 받아와 실행시킬 때 해당 프로젝트에 사용된 의존 Package를 일일히 찾아 설치하기에는 어려움이 있다
> 관례적으로 Python에서는 ==requirments.txt== 파일에 Package와 버전을 정의하고 일괄적으로 다운로드 한다
~~~
$ pip freeze > requirements.txt
$ pip install -r requirements.txt
~~~