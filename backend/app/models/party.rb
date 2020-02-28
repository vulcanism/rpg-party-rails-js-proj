class Party < ApplicationRecord
    has_many :members

    validates :name, presence: true
    validates :quest, presence: true
    validates :color, presence: true
end
