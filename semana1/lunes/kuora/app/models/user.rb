class User < ActiveRecord::Base
  has_many :questions 
  has_many :answers

  validates :username, :email, :password, presence: true
  validates :username, :email, uniqueness: true
  validates :email, format: { with: /\A([\w_\d\-]+)?\w+@[\w]+\.[\w]+{2,}/} 
  validates :password, format: {with: /\A[a-z,A-Z,0-9,_,$,.,\/]{6,}/ }
  
  def authenticate(email, user_password)
    user = User.find_by(email: email)
    if user && (user.password == user_password)
      return user
    else
      nil
    end
  end

end
