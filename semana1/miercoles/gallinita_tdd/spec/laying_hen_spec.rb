require 'laying_hen'

describe LayingHen do

  let(:gallina) {LayingHen.new()}
  
  describe "#initialize" do

    context "a laying hen" do
      it "existsts" do
        expect(gallina).to eq(gallina)
      end
    end

    context "initialize a newborn chicken" do
      it "has 0 months" do
        expect(gallina.age).to eq(0)
      end
    end

  end

  describe "#age!" do
    context "it ages one month" do 
      it "age +1 month" do
        gallina.age!
        expect(gallina.age).to eq(1)
      end
    end

    context "it ages 4 months" do
      it "ages 4 months" do
        4.times {gallina.age!}
        expect(gallina.age).to eq(4)
      end
    end

    context "it ages 4 months" do 
      it "lays 4 eggs" do
        4.times {gallina.age!}
        expect(gallina.basket.size).to eq(4)
      end      
    end
  end
end

describe Egg do

  let(:huevo) {Egg.new()}
  
  describe "#initialize" do

    context "an egg" do
      it "existsts" do
        expect(huevo).to eq(huevo)
      end
    end

  end


end
