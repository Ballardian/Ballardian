class Task
  def initialize(description)
    @description = description
    @done = false
  end

  def mark_as_completed!
    @done = true
  end
end
