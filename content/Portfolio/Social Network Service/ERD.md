---
tags:
  - Project_Doc
---
## Entity Relationship Diagram
![](https://onedrive.live.com/embed?resid=130CBFA7E5A0B893%2165082&authkey=%21AJuwaXojr4VidZk&width=1611&height=1135)

<br>

## DBDiagram Source
~~~
// 팔로워
Table follows {
	id integer [primary key]
	following_user_id integer [ref: > users.id]
	followed_user_id integer [ref: > users.id]
	status varchar
	created_at timestamp
}

// 팔로우 차단
Table block_follows{
	id integer [primary key]
	user_id integer [ref: > users.id]
	block_user_id integer [ref: > users.id]
}

// 사용자
Table users {
	id integer [primary key]
	email varchar [unique]
	username varchar
	nickname varchar
	password varchar(20)
	profile_image_id integer
	introduce text
	provider varchar // 구글/카카오 등 구분
	status varchar // 계정 잠금 상태
	password_wrong_count integer
	access_code integer
	created_at timestamp
	updated_at timestamp
	indexes {
		email
		username
	}
}
Ref: users.profile_image_id - images.id

// 게시글
Table posts {
	id integer [primary key]
	content text [note: 'Content of the post']
	user_id integer
	status varchar
	is_comment_allowed varchar
	is_private_post varchar
	created_at timestamp
	updated_at timestamp
}
Ref: posts.user_id > users.id [delete: no action]

// 게시글 이미지
Table post_images {
	id integer [primary key]
	post_id integer [ref: > posts.id]
	image_id integer
}
Ref: post_images.image_id < images.id

// 이미지
Table images {
	id integer [primary key]
	path varchar
	created_at timestamp
}

// 해시태그
Table hashtags{
	id integer [primary key]
	post_id integer [ref: > posts.id]
	tag varchar
	indexes {
		(post_id) [pk]
	}
}

// 댓글
Table comments {
	id integer [pk]
	post_id integer [ref: > posts.id]
	user_id integer
	content varchar(100)
	parent_comment_id integer [ref: > comments.id]
	depth integer
	status varchar
	created_at timestamp
	updated_at timestamp
}
Ref: comments.user_id > users.id [delete: no action]

// 게시글 좋아요
Table post_like {
	id integer [pk]
	post_id integer [ref: > posts.id]
	user_id integer
	indexes {
		(post_id, user_id) [pk]
	}
}
Ref: post_like.user_id > users.id [delete: no action]

// 댓글 좋아요
Table comment_like {
	id integer [pk]
	comment_id integer [ref: > comments.id]
	user_id integer
	indexes {
		(comment_id, user_id) [pk]
	}
}
Ref: comment_like.user_id > users.id [delete: no action]

// DM
Table direct_message_containers {
	id integer [pk]
	created_at timestamp
}

// DM
Table direct_message_users {
	id integer [pk]
	direct_message_container_id integer [ref: > direct_message_containers.id]
	status varchar
	user_id integer [ref: > users.id]
	created_at timestamp
}

// DM
Table direct_messages {
	id integer [pk]
	container_id integer [ref: > direct_message_containers.id]
	message text
	sent_at timestamp
	is_read varchar
	status varchar
}

// Setting
Table settings {
	id integer [pk]
	user_id integer [pk, ref: - users.id]
	setting_name varchar
	is_use varchar
}

// alarm
Table alarms {
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