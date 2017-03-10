class AnswersController < ApplicationController

  def create
    @question = Question.find(params[:question_id])
    @answer = current_user.answers.create(answer_params)
    redirect_to user_path(current_user)
  end

  private

  def answer_params
    params.require(:answer).permit(:answer, :question_id)
  end

end
