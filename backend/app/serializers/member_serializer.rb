class MemberSerializer 
    include FastJsonapi::ObjectSerializer

  attributes :party_id, :name, :level, :gender, :race, :role

  belongs_to :party
end