class QuestionsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @questions = Question.find_by(user_id: @user.id)
  end

  def show
    @question = Question.find(params[:id])
  end

  def answer_one
    @questions = Question.all
  end

  def new
    @user = User.find(params[:user_id])
  end

  def create
    @user = User.find(params[:user_id])
    @question = @user.questions.create(question_params)
    redirect_to user_path(@user)
  end
 
  private
    def question_params
      params.require(:question).permit(:question)
    end
end
