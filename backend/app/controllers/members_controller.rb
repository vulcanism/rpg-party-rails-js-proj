class MembersController < ApplicationController
    def index
        members = Member.all
    end

    def create
    end

    def show
    end

    def update
    end

    def destroy
    end

    private

    def member_params
        params.require(:member).permit(:name, :level, :gender, :race, :role, :party_id)
    end
end