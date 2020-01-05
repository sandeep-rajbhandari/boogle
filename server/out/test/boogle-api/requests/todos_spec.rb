require 'rails_helper'

RSpec.describe 'Todos API', type: :request do
  let (:id) {12}
  describe 'Get todo' do
    before {get '/api/v1/todo'}
    it 'returns todos' do
      expect(json).not_to be_empty
    end
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
  describe 'GET /api/v1/todo/:id' do
    before {get "/api/v1/todo/#{id}"}

    context 'when the record exists' do
      it 'returns the todo' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end
end