defmodule Mandark.Diagnostics do
  def finished?(s), do: s.completed or (s.started and s.availability in [:window_closed, :timer_expired, :closed_by_teacher, :closed_by_admin])
  def count_completed(students), do: Enum.count(students, &finished?/1)
  def count_assigned(students), do: length(students)
end
