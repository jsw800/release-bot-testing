defmodule Mandark.Repo.Migrations.AddReferenceSheets do
  use Ecto.Migration
  def change do
    create table(:reference_sheets) do
      add :title, :string
      timestamps()
    end
  end
end
