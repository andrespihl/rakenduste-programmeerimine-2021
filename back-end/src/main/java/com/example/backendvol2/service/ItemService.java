package com.example.backendvol2.service;

import com.example.backendvol2.model.Item;
import com.example.backendvol2.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public List<Item> getItems(){
        return itemRepository.findAll();
    }

    public void saveItem(Item item){
        itemRepository.save(item);
    }
}
