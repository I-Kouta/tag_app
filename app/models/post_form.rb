class PostForm
  include ActiveModel::Model

  # PostFormクラスのオブジェクトがPostモデルの属性を扱えるようにする
  attr_accessor :text, :image

  with_options presence: true do
    validates :text
    validates :image
  end

  def save
    Post.create(text: text, image: image)
  end
end