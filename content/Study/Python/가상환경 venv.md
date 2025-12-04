---
part: 프레임워크
level: 매뉴얼
tags:
  - Study
  - Python
---
> [!summary]
> Python의 패키지를 관리할 때 해당 환경에서 모든 패키지를 설치해 사용할 수 있겠지만, 프로젝트마다 버전 차이 등으로 프로젝트단위 패키지의 격리가 필요한 경우가 생긴다<br>
> 이런 문제를 해결하기 위해 Python에서는 가상 환경을 생성할 수 있는 기능을 제공한다
> [Python 공식문서](https://docs.python.org/ko/3/library/venv.html)


## 목차
1. venv 가상환경 생성
2. venv 가상화

<br>

## venv 가상 환경 생성
- 아래 명령어를 이용하여 가상 환경을 생성한다
~~~
$ python -m venv [가상환경이름]
~~~
> 해당 명령어를 실행 후 ==./\[가상환경이름]== 디렉터리가 생성되면 성공이다

<br>

## venv 가상화
- 아래 명령어를 이용하여 가상화한다

| shell 종류 | 명령어 |
| ---- | ---- |
| bash/zsh | `$ source <가상환경이름>/bin/activate` |
| fish | `$ source <가상환경이름>/bin/activate.fish` |
| csh/tcsh | `$ source <가상환경이름>/bin/activate.csh` |
> 명령어 실행 후 shell화면에 (가상환경이름) 이 표기되면 성공이다

---
## Notes
- [[pip]]