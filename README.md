# Project-Stuco

### 전체프로젝트 개발환경(구상)

- OS  :`window`, `Mac OS X(Unix)`

- WAS : `Apache Tomcat 8.5` , `Apache Tomcat 8.0 for Window, Mac`

- WEB : `HTML5(html,css,javascript)` , `Jquery` , `Ajax` , `vue`

- Test BROWSER : `Google Chrome` , `MS IE & Edge` , `Mozilla Firefox` , `Opera` , `Apple Safari`

### 담당 수행 역할
- 전체 화면 UI (화면정의서) 기획
- 디자인 제작
- 페이지 퍼블리싱
- 프론트엔드 (데이터 바인딩)-제작없음

****

# 프로젝트 소개

###  [Project-Stuco](https://github.com/wnstkdyu/afterHackDay2018)
   **교육지원 웹 서비스**
 >강사와 교육생 간의 원활한 의사소통과 더불어 질문하기를
 어려워하는 교육생들을 위한 프로젝트


### 사이트이미지

<img src="/logo_marketing_image.PNG" width="500" height="144" hspace="2">
<img src="/imac_목업이미지2.png" width="800" height="650" hspace="2">

### 기획

[<img src="UI-Struct-img.png" width="900" height="120" hspace="2">](/화면정의서_인쇄2.pdf)
[프로젝트 Stuco 기획안](/화면정의서_인쇄2.pdf)

## # 주요기능

* 메인화면
  - 모든학생들이 접속 가능하며 홍보 및 설명 화면을 먼저 접합니다.
  - 브라우저 로그인 이후 수업과정에서 있었던 정보 및 수업내용을 게시판형식으로 메인 화면에서 보여줍니다.
  - 게시글을 올린 본인만 자신이 올린 게시글을 지울 수 있고 관리자는 모든 게시글에 대한 삭제권한이 있습니다.
  - 게시글에 대한 좋아요와 관심도를 클릭가능하며, 댓글로 게시물에 대한 의견을 적을 수 있습니다.
  - 게시글에 대한 좋아요 숫자가 높은 순위로 최상단으로 올라가도록 자동 지정이 되어있습니다.
  - 관심도 최상위인 1개의 게시글은 메인화면에 컨텐츠Box로 보여집니다.
  
* 회원가입 및 로그인
  - 기본 로그인 회원가입 형식을 사용했습니다.

* 관리자 로그인 및 관리계정
  - URI를 받은 관리자만이 접속 가능하며 로그인 화면을 먼저 접합니다.
  - 로그인 이후 새로운 수업 및 관리하고 있는 수업계정을 게시판 형식으로 관리자화면에서 보여줍니다.
  - 계정을 만든 관리자만이 자신이 직접 만든 계정방에 대해서 삭제권한이 있습니다.
  
* 채팅
  - 실시간으로 필요한 정보를 채팅으로 주고 받을 수 있습니다.
  - 메인화면과 함께 채팅이 같은 화면에서 보여지며 한번 올린 채팅은 수정, 삭제가 불가능합니다.
  - 프로필 계정은 수정이 불가하며 닉네임은 중복지정이 가능합니다.
  
* 게시글작성 창
  - 개인적인 공간으로 개인적인 질문에 대한 글을 작성할 수 있습니다.

 ```
  // models.py
  class Photo(models.Model):
    image = ImageField(upload_to = user_path)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,)
    title = models.CharField(max_length = 255, default='')
    pub_date = models.DateTimeField(auto_now_add = True)
    is_public = models.BooleanField(default=False) 

    def __str__(self):
        return '{} {} {}'.format(self.owner.username, self.title, self.is_public)
    ```

    ```
    // views.py -> public이 선택된 사진만 모델에서 불러옴.
    photo_list = Photo.objects.filter(is_public=True)[:20]
    ```  

### Trouble Shooting
- 문제내용1

    - 문제: 웹 소켓을 활용한 채팅과 관리자 URI와 UI의 화면구성은 모달창으로 구성
    - 연구: 작은 창과 페이지를 모달창으로 구성하되 주 메인창은 
    - 해결: 


