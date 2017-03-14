class Roll < ApplicationRecord
  # validates :value, :inclusion => { :in => (1..6), :message => "must be between 1 and 6" }

  after_initialize :roll_if_value_is_nil

  private
    # Si el user nos pasa un valor, lo usamos y si no creamos uno.
    def roll_if_value_is_nil
      self.value = (rand(3) + 1) if not self.value
    end
end
