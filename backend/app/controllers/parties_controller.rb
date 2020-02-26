class PartiesController < ApplicationController
    before_action :set_party, only: [:update, :destroy]

    def index
        parties = Party.all
        options = {
            include: [:members]
          }
          render json: PartySerializer.new(parties, options)
    end

    def create
        party = Party.create!(party_params)
        options = {
            include: [:members]
          }
        render json: PartySerializer.new(party)
    end

    def show
        party = Party.find_by(id: params[:id])
        options = {
            include: [:members]
          }
          render json: PartySerializer.new(parties, options)
    end

    def update
        party.update(party_params)
        head :no_content
    end

    def destroy
        party.destroy
        head :no_content
    end

    private

    def party_params
        params.require(:party).permit(:name, :quest, :color)
    end

    def set_party
        party = Party.find_by(id: params[:id])
    end

end