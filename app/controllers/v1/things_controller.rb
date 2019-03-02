class V1::ThingsController < ApplicationController
  def index
    render json: {
      :things => [
        {
          :name => 'some-thing',
          :guid => '328fcb71-f383-4de0-b1d8-d81a4c53ffcf'
        }
      ]
    }
  end
end