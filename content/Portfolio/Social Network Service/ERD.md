---
tags:
  - Project_Doc
---
## Entity Relationship Diagram
![](https://onedrive.live.com/embed?resid=130CBFA7E5A0B893%2165130&authkey=%21ABRUP8Kp9g__vqg&width=1174&height=1093)

<br>

## DBDiagram Source
~~~
// 팔로워
Table follow {
  id integer [primary key]
  following_user_id integer [ref: > user.id]
  followed_user_id integer [ref: > user.id]
  status varchar
  created_at timestamp 
}

// 팔로우 차단
Table block_follow{
  id integer [primary key]
  user_id integer [ref: > user.id]
  block_user_id integer [ref: > user.id]
}

// 사용자
Table user{
  id integer [primary key]
  email varchar [unique]
  username varchar
  nickname varchar
  password varchar(20)
  profile_image_id integer
  introduce text
  provider varchar // 구글/카카오 등 구분
  status varchar  // 계정 잠금 상태
  password_wrong_count integer
  access_code integer
  created_at timestamp
  updated_at timestamp
  indexes {
    email
    username
  }
}
Ref: user.profile_image_id - image.id

// 게시글
Table post {
  id integer [primary key]
  content text [note: 'Content of the post']
  user_id integer
  status varchar
  comment_allowed_yn varchar
  private_post_yn varchar
  created_at timestamp
  updated_at timestamp
}
Ref: post.user_id > user.id [delete: no action]

// 게시글 이미지
Table post_image {
  post_id integer [ref: > post.id]
  image_id integer
  indexes {
    (post_id, image_id) [pk]
  }
}
Ref: post_image.image_id < image.id

// 이미지
Table image {
  id integer [primary key]
  path varchar
  created_at timestamp
}

// 해시태그
Table hashtag{
  id integer [primary key]
  post_id integer [ref: > post.id]
  tag varchar
  indexes {
    (post_id) [pk]
  }
}

// 댓글
Table comment {
  id integer [pk]
  post_id integer [ref: > post.id]
  user_id integer
  content varchar(100)
  parent_comment_id integer [ref: > comment.id]
  depth integer
  status varchar
  created_at timestamp
  updated_at timestamp
}
Ref: comment.user_id > user.id [delete: no action]

// 게시글 좋아요
Table post_like {
  post_id integer [ref: > post.id]
  user_id integer
  indexes {
    (post_id, user_id) [pk]
  }
} 
Ref: post_like.user_id > user.id [delete: no action]

// 댓글 좋아요
Table comment_like {
  comment_id integer [ref: > comment.id]
  user_id integer
  indexes {
    (comment_id, user_id) [pk]
  }
}
Ref: comment_like.user_id > user.id [delete: no action]

// DM
Table direct_message_container {
  id integer [pk]
  created_at timestamp
}

// DM
Table direct_message_user {
  id integer [pk]
  direct_message_container_id integer [ref: > direct_message_container.id]
  status varchar
  user_id integer [ref: > user.id]
  created_at timestamp
}

// DM
Table direct_message {
  id integer [pk]
  container_id integer [ref: > direct_message_container.id]
  message text
  sent_at timestamp
  read_yn varchar
  status varchar
}

// Setting
Table setting {
  id integer [pk]
  user_id integer [pk, ref: - user.id]
  setting_name varchar
  use_yn varchar
}

// alarm
Table alarm {
  id integer [pk]
  from_user_id integer
  to_user_id integer
  type varchar
  content varchar
  status varchar
  created_at timestamp
}
~~~
---
## Tools
- [[DBDiagram]]