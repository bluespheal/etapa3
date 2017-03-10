class AnswersController < ApplicationController

  def index
    @user_profile = User.find(params[:user_id])
    @questions = Question.where(user_id: current_user.id)
    @answers = Answer.where(user_id: current_user.id)
  end

  def create
    puts "*" * 30
    puts 'INSIDE CREATE ANSWER'
    p params
    @question = Question.find(params[:question_id])
    # Answer.create()
    if @answer = current_user.answers.create(answer_params)
      redirect_to user_path(current_user)
    else

    end
  end

  private

  def answer_params
    puts '=' * 30
    puts 'INSIDE ANSWER_PARAMS'
    p params.require(:answer).permit(:answer, :question_id)
  end

end
