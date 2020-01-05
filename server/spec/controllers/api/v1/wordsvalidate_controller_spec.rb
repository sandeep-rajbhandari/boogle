require 'rails_helper'

RSpec.describe 'words validate API', type: :request do
  describe 'right words' do
    before {get '/api/v1/wordsvalidate?word=test'}
    it 'returns todos' do
      expect(json).to eq(isValid: true, points: 1)
    end
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
  describe 'wrong word' do
    before {get "/api/v1/wordsvalidate/?word=testeee"}

    it 'returns the todo' do
      expect(json).to eq(isValid: false, points: 0)

    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end