class LayingHen
  attr_reader :age, :basket

  def initialize(age = 0)
    @age = 0
    @basket=[]
  end

  # Ages the hen one month, and lays 4 eggs if the hen is older than 3 months
  def age!
    @age += 1
    if @age >= 4
      4.times {@basket << Egg.new}
    end
  end  
end

class Egg

end
