from json import load
from os.path import join
from collections import OrderedDict


json_path = join('static', 'data')


def create_textfile_list():
    with open(join(json_path, 'crime_data.json'), 'r') as crime_json:
        crime_dict = load(crime_json, object_pairs_hook=OrderedDict)
    with open(join(json_path, 'grouped_neighborhoods.json'), 'r') as median_json:
        median_dict = load(median_json, object_pairs_hook=OrderedDict)
    with open(join(json_path, 'taxi_data.json'), 'r') as taxi_json:
        taxi_dict = load(taxi_json, object_pairs_hook=OrderedDict)

    joined_list = crime_dict.keys() + median_dict.keys() + taxi_dict.keys()

    fake_dict = OrderedDict()

    for area in joined_list:
        string_area = str(area)
        if fake_dict.get(string_area) is None:
            fake_dict[string_area] = 0

    for key in fake_dict.keys():
        print key

    with open('neighborhoods.txt', 'w') as text_file:
        for each_element in joined_list:
            text_file.write('%s\n' % each_element)


if __name__ == '__main__':
    create_textfile_list()
