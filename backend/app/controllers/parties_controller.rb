class PartiesController < ApplicationController
    def index
        parties = Party.all
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

end