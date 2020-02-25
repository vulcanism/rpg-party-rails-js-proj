class PartiesController < ApplicationController
    before_action :set_party, only: [:update, :destroy]

    def index
        parties = Party.all
        render json: parties
    end

    def create
        party = Party.new(party_params)
        if party.save
            render json: party
        end
    end

    def show
        party = Party.find_by(id: params[:id])
        render json: party
    end

    def update
    end

    def destroy
        party.destroy
        render json: party
    end

    private

    def party_params
        params.require(:party).permit(:name, :quest, :color)
    end

    def set_party
        party = Party.find_by(id: params[:id])
    end

end