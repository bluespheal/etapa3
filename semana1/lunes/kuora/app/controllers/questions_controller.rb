class QuestionsController < ApplicationController
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
