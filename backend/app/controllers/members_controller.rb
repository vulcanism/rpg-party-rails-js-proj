class MembersController < ApplicationController
    before_action :set_member, only: [:update, :destroy]

    def index
        members = Member.all
        render json: MemberSerializer.new(members), include: [:party]
    end

    def create
        member = Member.new(member_params)

        if member.save
            json_response(member, :created)
        
        else
            render json: {message: "Member was not created"}
        end
    end

    def show
        member = Member.find_by(id: params[:id])
        render json: MemberSerializer.new(member), include: [:party]
    end

    def update
        member.update(member_params)    
    end

    def destroy
        member.destroy
        head :no_content
    end

    private

    def member_params
        params.require(:member).permit(:name, :level, :gender, :race, :role, :party_id)
    end

    def set_member
        member = Member.find_by(id: params[:id])
    end
end