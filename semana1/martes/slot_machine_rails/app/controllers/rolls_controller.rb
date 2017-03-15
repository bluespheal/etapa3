class RollsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def home
    @rolls = []

    3.times { @rolls << Roll.create }

    @win = "WINNER!!" if @rolls.map! { |roll| roll.value }.uniq.count == 1
  end

  def rolling
    @rolls = []

    if params[:value]
      3.times { @rolls << Roll.create({ value: value }) }
    else
      3.times { @rolls << Roll.create }
    end

    @win = "WINNER!!" if @rolls.map! { |roll| roll.value }.uniq.count == 1

  end
end
