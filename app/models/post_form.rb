class PostForm
  include ActiveModel::Model

  # PostFormクラスのオブジェクトがPostモデルの属性が扱えるようにする
  attr_accessor :text, :image
end