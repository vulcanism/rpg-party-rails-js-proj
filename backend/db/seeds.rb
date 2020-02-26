# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Party.create(:name => "Dashing Rogues", :quest => "Find the Holy Grail", :color => "Gray")
Party.create(:name => "Heavy Metal", :quest => "Slay a dragon", :color => "Dark Blue")
Party.create(:name => "Team Golem", :quest => "Serve a mysterious goddess", :color => "Red")
Party.create(:name => "The Golden Standard", :quest => "Protect a small village", :color => "Gold")

Member.create(:party_id => "1", :name => "Elfano", :level => "10", :gender => "Female", :race => "Elf", :role => "Ranger")
Member.create(:party_id => "1", :name => "Kaytu", :level => "14", :gender => "Male", :race => "Halfling", :role => "Thief")

Member.create(:party_id => "2", :name => "Nux", :level => "16", :gender => "Male", :race => "Human", :role => "Warrior")
Member.create(:party_id => "2", :name => "Ace", :level => "15", :gender => "Male", :race => "Human", :role => "Barbarian")
Member.create(:party_id => "2", :name => "Max", :level => "18", :gender => "Female", :race => "Human", :role => "Paladin")

Member.create(:party_id => "3", :name => "Salen", :level => "8", :gender => "Male", :race => "Half-Elf", :role => "Ranger")
Member.create(:party_id => "3", :name => "Sinash", :level => "8", :gender => "Male", :race => "Dwarf", :role => "Wizard")
Member.create(:party_id => "3", :name => "Fulton", :level => "10", :gender => "Male", :race => "Human", :role => "Barbarian")

Member.create(:party_id => "4", :name => "Sonja", :level => "18", :gender => "Female", :race => "Orc", :role => "Paladin")
Member.create(:party_id => "4", :name => "Cathal", :level => "16", :gender => "Male", :race => "Human", :role => "Cleric")
Member.create(:party_id => "4", :name => "Lambert", :level => "17", :gender => "Male", :race => "Human", :role => "Ranger")
Member.create(:party_id => "4", :name => "Keira", :level => "17", :gender => "Female", :race => "Elf", :role => "Monk")