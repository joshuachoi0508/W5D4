def transpose(matrix)
  original_row_amount = matrix.length
  original_col_amount = matrix[0].length
  
  result = Array.new(original_col_amount)
  
  matrix.each do |row|
    row.each_with_index do |col, i|
      result[i] << col
    end
  end
  
  result
end