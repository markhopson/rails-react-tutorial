class V1::ThingsController < ApplicationController
  def index
    render json: {
      :things => [
        {
          :name => 'some-thing',
          :guid => '328fcb71-f383-4de0-b1d8-d81a4c53ffcf'
        },
        {
          :name => 'some-thing-else',
          :guid => '328fcb71-f383-4de0-b1d8-d81a4c53ffcg'
        }
      ]
    }
  end
end