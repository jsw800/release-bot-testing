defmodule Mandark.Diagnostics do
  def count_completed(students), do: Enum.count(students, & &1.completed)
end
