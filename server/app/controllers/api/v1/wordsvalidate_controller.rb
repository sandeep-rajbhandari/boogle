class Api::V1::WordsvalidateController < ApplicationController
  def index
    begin
      word = item_params[:word].strip
      is_valid = V1::WordsService.instance.find_word(word)
      count = is_valid ? V1::WordsService.instance.calculate_points(word) : 0
      json_response(isValid: is_valid, points: count)
    rescue StandardError => e
      logger.error(e);
      json_response(error:e)
    end
  end

  private

  def item_params
    params.permit(:word)
  end
end
