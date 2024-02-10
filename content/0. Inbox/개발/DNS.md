---
part: 컴퓨터일반
level: 개념
tags:
  - CS
---
> [!summary]
> 장치 대 장치의 인터넷 통신을 하기 위해서는 반드시 IP 주소가 필요하다. <br>
> 하지만 이런 통신을 하기 위해 모든 IP 주소를 기억하는 일은 너무 어렵기 때문에 사람이 보다 편하게 기억하고 접근하기 위해 사용되는 것을 도메인이라고 한다. <br>
> - IP 주소 : 223.130.200.107 <br>
> - 도메인 : www.naver.com <br>
>
>DNS( Domain Name System )란 이 IP 주소와 도메인을 연결/관리하는 것을 말한다. <br>
> - 223.130.200.107 <> www.naver.com 


## 목차
1. DNS 구조
2. DNS Server


## DNS 구조
- DNS는 트리구조로 되어있으며 가장 마지막에 . (루트) 가 생략되어 있는 형태이다.
	  ![](https://onedrive.live.com/embed?resid=130CBFA7E5A0B893%2165080&authkey=%21ADUA7PvalpmxzeA&width=663&height=397)
- DNS의 명칭은 역순으로 뒤로 갈수록 상위 Level이다.
	  ![](https://onedrive.live.com/embed?resid=130CBFA7E5A0B893%2165079&authkey=%21ALPln9voEjek9Is&width=608&height=149)

<br>

## DNS Server
- DNS Server는 IP 주소와 도메인 이름을 기억하고 Client가 요청 시 연결된 IP 주소를 응답한다.

<br>

### DNS Server의 IP주소 응답 과정
![](https://onedrive.live.com/embed?resid=130CBFA7E5A0B893%2165081&authkey=%21ADq7mV6tLpbdz5A&width=742&height=345)
0. 사용자가 웹 브라우저에 [www.naver.com](http://www.naver.com) 입력
1. 웹 브라우저는 DNS에 IP 주소 요청 먼저 Local DNS에 www.naver.com이라는 hostname에 대한 IP 주소 확인
2. Local DNS 에 없는 경우 Root DNS에 확인 ( [www.naver.com](http://www.naver.com)의 IP 주소 확인 )
3. Root DNS에 없다면 com DNS 로 응답
4. Root DNS 로부터 응답 받은 com DNS에 확인 ( [www.naver.com](http://www.naver.com)의 IP 주소 확인 )
5. com DNS에 없다면 [naver.com](http://naver.com) DNS 로 응답
6. com DNS 로부터 응답받은 [naver.com](http://naver.com) DNS에 확인 ( [www.naver.com](http://www.naver.com)의 IP 주소 확인 )
7. [naver.com](http://naver.com) DNS는 www.naver.com의 IP 주소 222.122.195.6을 Local DNS에 전달
8. Local DNS는 www.naver.com에 대한 IP 주소를 캐싱하고 IP 주소 정보를 웹 브라우저에 전달

<br>

### Local DNS
- ==DNS Server의 IP주소 응답 과정==을 보면 Local DNS의 설정을 최우선적으로 확인한다. 그러므로 사용자가 Local DNS를 수정하여 개별적으로 Domain과 IP를 연결시킬 수 있다.
#### 설정방법
> **이 파일은 보안에 취약하기 때문에 위•변조가 일어나지 않도록 보안에 신경 써주어야 한다.**
1. 운영체제에 맞게 해당 파일을 연다.

| OS     | PATH                                  |
|--------|---------------------------------------|
| Window | C:\Windows\System32\drivers\etc\hosts |
| Linux  | /etc/hosts                            |
| Mac    | /etc/hosts                            |

2. 경로로 접근하여 아래 양식에 맞게 ip/domain을 추가한다
~~~
127.0.0.1              hanee.com
~~~

3. 정상적으로 추가 하였다면 Command창에서 아래 명령어로 정상적으로 설정되었는지 확인할 수 있다.
~~~bash
ping hanee.com
~~~