defmodule Mandark.Repo.Migrations.AddDiagnosticsStudentIndex do
  use Ecto.Migration

  def change do
    create index(:diagnostic_students, [:diagnostic_id, :completed])
  end
end
