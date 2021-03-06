class PartySerializer
    include FastJsonapi::ObjectSerializer
  
    attributes :id, :name, :quest, :color
  
    has_many :members
  end