# == Schema Information
#
# Table name: songs
#
#  id                     :integer          not null, primary key
#  title                  :string           not null
#  playlist_id            :integer          not null
#  album_id               :integer          not null
#  artist_id              :integer          not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  musicfile_file_name    :string
#  musicfile_content_type :string
#  musicfile_file_size    :integer
#  musicfile_updated_at   :datetime
#  length                 :string
#

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
