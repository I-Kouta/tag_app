class PostForm
  include ActiveModel::Model

  # PostFormクラスのオブジェクトがPostモデルの属性を扱えるようにする
  attr_accessor(
    :text, :image,
    :id, :created_at, :datetime, :updated_at, :datetime,
    :tag_name
  )

  with_options presence: true do
    validates :text
    validates :image
  end

  def save
    post = Post.create(text: text, image: image) # 保存したレコードを変数postに代入
    tag = Tag.where(tag_name: tag_name).first_or_initialize # tagが重複して保存されることを防ぐ
    tag.save
    PostTagRelation.create(post_id: post.id, tag_id: tag.id)
  end

  def update(params, post)
    post.update(params)
  end
end