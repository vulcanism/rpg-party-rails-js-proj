class MembersController < ApplicationController
    def index
        members = Member.all
        render json: members
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

    def set_member
        member = Member.find_by(id: params[:id])
    end
end