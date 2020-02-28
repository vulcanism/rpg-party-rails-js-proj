class Member < ApplicationRecord
    belongs_to :party

    ## Name, Level, Gender, Race, Role

    validates :name, presence: true
    validates :level, presence: true
    validates :gender, presence: true
    validates :race, presence: true
    validates :role, presence: true
end
