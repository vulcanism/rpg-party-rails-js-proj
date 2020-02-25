class MembersController < ApplicationController
    before_action :set_member, only: [:update, :destroy]

    def index
        members = Member.all
        render json: members
    end

    def create
        member = Member.new(member_params)
        if member.save
            render json: member
        end
    end

    def show
        member = Member.find_by(id: params[:id])
        render json: member
    end

    def update    
    end

    def destroy
        member.destroy
        render json: member
    end

    private

    def member_params
        params.require(:member).permit(:name, :level, :gender, :race, :role, :party_id)
    end

    def set_member
        member = Member.find_by(id: params[:id])
    end
end