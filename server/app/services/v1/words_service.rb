require 'singleton'
class V1::WordsService
  include Singleton

  def initialize
    @file_name ||= 'public/words_alpha.txt';
  end

  def find_word(word)
    File.open(@file_name) do |f|
      tmp = f.read(1024)
      return true if tmp.include?(word)
      until f.eof?
        tmp = tmp[(-1 * word.size)..-1] + f.read(1024)
        return true if tmp.include?(word)
      end
      return false
    end
  end

  def calculate_points(word)
    word_length = word.length
    case word_length
    when 0..2
      return 0
    when 3..4
      return 1
    when 5
      return 2
    when 6
      return 3
    when 7
      return 5
    else
      return 11
    end
  end
end