class PartiesController < ApplicationController
    def index
        parties = Party.all
        render json: parties
    end

    def create
    end

    def show
    end

    def update
    end

    def destroy
        party.destroy
    end

    private

    def party_params
        params.require(:party).permit(:name, :quest, :color)
    end

    def set_party
        party = Party.find_by(id: params[:id])
    end

end