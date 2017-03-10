class Question < ActiveRecord::Base

  has_many :answers
  belongs_to :user

  validates :question, :user_id, presence: true

end
