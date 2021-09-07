# Project-Stuco

### 개인정보
- [WebSite- Uniquepro](http://uniquepro.pe.kr/)
- [ghkd6385@naver.com](ghkd6385@naver.com)

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

### 1.  [Project-Stuco](https://github.com/wnstkdyu/afterHackDay2018)
   **교육지원 웹 서비스**
 >강사와 교육생 간의 원활한 의사소통과 더불어 질문하기를
 어려워하는 교육생들을 위한 프로젝트


### 사이트이미지

<img src="/imac_목업이미지2.png" width="800" height="650" hspace="2">

### 기획

[<img src="UI-Struct-img.png" width="900" height="120" hspace="2">](/화면정의서_인쇄2.pdf)
[프로젝트 Stuco 기획안](/화면정의서_인쇄2.pdf)

## # 주요기능

* 메인화면
  - 사이트는 회원만 접속 가능하며 로그인 화면을 먼저 접합니다.
  - 로그인 이후 프로젝트 과정에서 있었던 사진들을 썸네일 형식으로 메인 화면에서 보여줍니다.
  - 회원은 누구나 사진을 올릴 수 있으며 자신이 올린 사진을 지울 수 있고 관리자는 모든 사진에 대해 삭제권한이 있습니다.
  
* 회원가입 및 로그인
  - 장고 기본 로그인 회원가입 형식을 사용했습니다.
  
* Photo
  - 사진 업로드 시 public 선택 란이 있습니다.
  - public을 선택하면 메인화면에서 사진을 볼 수 있고 선택하지 않을 시 자신의 Profile 화면에서 사진이 보여집니다.
  - 모든 사진과 사진에 대한 글은 수정, 삭제가 가능합니다.
  - 사진에는 댓글을 달 수 있습니다.
  
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
  
* Profile
  - 개인적인 공간으로 개인적인 프로젝트에 대한 사진이나 글을 작성할 수 있습니다.

* Project
  - 상단 메뉴바를 통해 볼 수 있습니다.
  - 보고서와 PPT를 슬라이드 형식으로 만들어 넘기면서 확일 할 수 있습니다.
  - 동영상 썸네일을 누르면 프로젝트를 소개하는 영상을 확인 할 수 있습니다.

### Trouble Shooting
- 문제내용1

    - 문제: 웹 소켓을 활용한 채팅과 관리자 URI와 UI의 화면구성은 모달창으로 구성
    - 연구: 작은 창과 페이지를 모달창으로 구성하되 주 메인창은 
    - 해결: 


