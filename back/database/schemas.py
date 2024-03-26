from __future__ import annotations
from pydantic import BaseModel, ConfigDict
from datetime import datetime


class UserSignIn(BaseModel):
    user_id: str
    password: str


class UserProfile(BaseModel):
    name: str | None = None
    email: str | None = None
    image: str | None = None


class UserInfo(UserProfile):
    user_id: str

    model_config = ConfigDict(from_attributes=True)


class UserForm(UserSignIn, UserInfo): ...


class HashedUser(UserInfo):
    user_id: str
    hashed_password: str | None = None


class UserExternalMap(BaseModel):
    external_id: str
    provider: str
    user_id: str


class TokenResult(BaseModel):
    user: UserInfo
    access_token: str


class CommentForm(BaseModel):
    post_id: int
    parent_comment_id: int | None = None
    content: str


class Comment(CommentForm):
    comment_id: int
    like_count: int
    created_at: datetime
    child_comments: list[Comment] | None = None
    author: UserInfo | None = None


class PostForm(BaseModel):
    title: str
    category: str
    content: str


class BasePost(BaseModel): 
    post_id: int
    title: str
    category: str
    scrap_count: int
    like_count: int
    view_count: int
    comment_count: int
    created_at: datetime
    author: UserInfo
    scrapped: bool
    liked: bool


class PostPreview(BasePost):
    thumbnail: Image | None = None

    model_config = ConfigDict(from_attributes=True)


class Post(BasePost):
    images: list[Image] | None = None
    content: str

    model_config = ConfigDict(from_attributes=True)


class TempPost(BaseModel):
    temp_post_id: int


class Image(BaseModel):
    image_id: str
    filename: str

    model_config = ConfigDict(from_attributes=True)

